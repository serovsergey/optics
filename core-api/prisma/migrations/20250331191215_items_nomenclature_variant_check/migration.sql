CREATE OR REPLACE FUNCTION check_item_variant_constraint()
RETURNS TRIGGER AS $$
declare variants_table TEXT;
declare res Int;
begin
	IF EXISTS (
        SELECT 1
        FROM public."catalog.nomenclatures"
        WHERE id = NEW.nomenclature_id and is_folder = true
    ) THEN
        RAISE EXCEPTION 'Nomenclature should nod have a folder mark';
    END IF;
	
	SELECT nt.variants_table
	INTO variants_table
    FROM public."catalog_types.nomenclatures" nt
    inner join "catalog.nomenclatures" n on n.type_id = nt.id
    WHERE n.id = new.nomenclature_id;
   
    IF variants_table is not null then
    	if NEW.variant_id is null then
    		RAISE EXCEPTION '"variant_id" (from "variant.%") should be not null for nomenclature with id = %', variants_table, new.nomenclature_id;
    	else
    		execute 'SELECT 1 FROM public."variant.' || variants_table || '" WHERE id = ' || NEW.variant_id into res;
    		if res is NULL then
	            RAISE EXCEPTION '"variant_id" must correspond to an existing entry in "variant.%"', variants_table;
	        END IF;
        END IF;
    ELSE
        if new.variant_id is not null then
        	RAISE EXCEPTION '"variant_id" should be null for nomenclature %, since its type does not imply variant', new.nomenclature_id;
        end if;
	END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

create trigger purchase_invoices_item_variant_constraint_trigger
before insert or update on public."document.purchase_invoices.items" 
for each row execute function check_item_variant_constraint()