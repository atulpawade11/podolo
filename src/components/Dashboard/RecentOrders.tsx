import { ArrowRight } from 'lucide-react';

const orders = [
  {
    id: '#71667167',
    status: 'COMPLETED',
    date: 'June 2, 2025 19:28',
    total: '$80 (11 Products)',
  },
  {
    id: '#95214362',
    status: 'CANCELED',
    date: 'Mar 20, 2025 23:14',
    total: '$160 (3 Products)',
  },
  {
    id: '#71667167',
    status: 'COMPLETED',
    date: 'Feb 2, 2025 19:28',
    total: '$80 (11 Products)',
  },
  {
    id: '#71667167',
    status: 'COMPLETED',
    date: 'Jan 15, 2015 19:28',
    total: '$80 (11 Products)',
  },
  {
    id: '#95214362',
    status: 'CANCELED',
    date: 'Dec 20, 2014 23:14',
    total: '$160 (3 Products)',
  },
];

export default function RecentOrders() {
  return (
    <div className="border border-gray-300 rounded-lg p-0 mt-6 bg-white">
      <div className="flex items-center justify-between mb-0 p-4">
        <h2 className="text-sm font-semibold text-gray-700">RECENT ORDER</h2>
        <button className="flex items-center text-sm font-medium text-blue-900 hover:underline cursor-pointer">
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      <hr className="border-b border-gray-300" />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 border-b border-gray-300 bg-gray-50">
              <th className="px-4 py-3 font-medium">ORDER ID</th>
              <th className="px-4 py-3 font-medium">STATUS</th>
              <th className="px-4 py-3 font-medium">DATE</th>
              <th className="px-4 py-3 font-medium">TOTAL</th>
              <th className="px-4 py-3 font-medium">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="px-4 py-3 font-medium text-gray-800">{order.id}</td>
                <td className="px-4 py-3 font-normal">
                  <span
                    className={`${
                      order.status === 'COMPLETED' ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-700">{order.date}</td>
                <td className="px-4 py-2 text-gray-700">{order.total}</td>
                <td className="px-4 py-2">
                  <button className="flex items-center font-normal text-yellow-500 hover:underline font-medium cursor-pointer">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
  