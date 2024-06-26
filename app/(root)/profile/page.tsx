import Collection from '@/components/shared/Collecton';
import { Button } from '@/components/ui/button';
import { getEventsByUser } from '@/lib/actions/events.action';
import { getOrdersByUser } from '@/lib/actions/order.action';
import { IOrder } from '@/lib/database/models/order.model';
import { SearchParamProps } from '@/types';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const profilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userName = sessionClaims?.userName as string;
  // const userImage = sessionClaims?.userImage as string;
  // const userFirstName = sessionClaims?.userFirstName as string;
  // console.log(userImage, userFirstName);
  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userName, page: ordersPage });
  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

  const eventsByUser = await getEventsByUser({ userName, page: ordersPage });
  return (
    <>
      {/* <section className="flex flex-row w-full">
        <div>
          <p>HEY</p>
          <h3>{userFirstName}</h3>
        </div>
      </section> */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={eventsByUser?.data}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={3}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default profilePage