import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type InvoiceStatusProp = {
  status: "paid" | "pending"
}
export default function InvoiceStatus({ status }: InvoiceStatusProp) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : <>
        Paid
        <CheckIcon className="ml-1 w-4 text-white" />
      </>}
      
    </span>
  );
}
