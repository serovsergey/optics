-- Trigger function to update total in document.purchase_invoices
CREATE OR REPLACE FUNCTION update_purchase_invoice_total()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        UPDATE public."document.purchase_invoices"
        SET total = (
            SELECT COALESCE(SUM(total), 0)
            FROM public."document.purchase_invoices._items"
            WHERE invoice_id = OLD.invoice_id
        )
        WHERE id = OLD.invoice_id;
    ELSE
        UPDATE public."document.purchase_invoices"
        SET total = (
            SELECT COALESCE(SUM(total), 0)
            FROM public."document.purchase_invoices._items"
            WHERE invoice_id = NEW.invoice_id
        )
        WHERE id = NEW.invoice_id;
    END IF;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the trigger function after insert, update, or delete on document.purchase_invoices._items
CREATE TRIGGER purchase_invoice_items_total_update
AFTER INSERT OR UPDATE OR DELETE ON public."document.purchase_invoices._items"
FOR EACH ROW
EXECUTE FUNCTION update_purchase_invoice_total();