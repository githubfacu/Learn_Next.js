import { fetchFilteredCustomers } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({searchParams}: {searchParams? : {query: string}}) {

  const query = searchParams?.query || '';
  const customers: FormattedCustomersTable[] = await fetchFilteredCustomers(query)

  console.log(customers);

    return (
      <CustomersTable query={query} customers={customers} />
    )
}
