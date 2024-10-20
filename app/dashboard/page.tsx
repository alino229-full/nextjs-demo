import { lusitana } from '@/app/ui/fonts';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Tableau de bord
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Revenus totaux" value="€45,231.89" type="invoices" />
        <Card title="Abonnements" value="+2,350" type="customers" />
        <Card title="Ventes en attente" value="7" type="pending" />
        <Card title="Factures payées" value="16" type="invoices" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart  />
        <LatestInvoices  />
      </div>
    </main>
  );
}