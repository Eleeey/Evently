// import React from 'react'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import Image from 'next/image';

// type DatePickerProps={
//   img:string,
//   alt:string,
//   tag:string,
//   nametag:string

// }

// const DatePick = ({img,alt,tag,nametag}:DatePickerProps) => {
//   return (
//     <FormField
//       control={form.control}
//       name="startDateTime"
//       render={({ field }) => (
//         <FormItem className="w-full">
//           <FormControl>
//             <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
//               <Image
//                 src="/assets/icons/calendar.svg"
//                 alt="calendar"
//                 width={24}
//                 height={24}
//                 className="filter-grey"
//               />
//               <p className="ml-3 whitespace-nowrap text-grey-600">
//                 Start Date:
//               </p>
//               <DatePicker
//                 selected={field.value}
//                 onChange={(date: Date) => field.onChange(date)}
//                 showTimeSelect
//                 timeInputLabel="Time:"
//                 dateFormat="MM/dd/yyyy h:mm aa"
//                 wrapperClassName="datePicker"
//               />
//             </div>
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// }

// export default DatePick