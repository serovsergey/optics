import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { PurchaseInvoiceItem } from './purchase-invoice-item';
import { Warehouse } from 'modules/catalogs/warehouses/models/warehouse.model';
import { Employee } from 'modules/catalogs/employees/models/employee.model';

@ObjectType()
export class PurchaseInvoice {
  @Field(() => Int)
  id: number;

  @Field()
  date: Date;

  @Field()
  num: string;

  @Field(() => Int)
  partnerId: number;

  @Field(() => Warehouse)
  warehouse: Warehouse;

  @Field(() => Employee)
  author: Employee;

  @Field()
  isPosted: boolean;

  @Field(() => [PurchaseInvoiceItem], { nullable: true })
  items?: PurchaseInvoiceItem[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
