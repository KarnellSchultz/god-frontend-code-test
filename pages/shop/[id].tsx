import Image from "next/image";

import { getCars } from "../api/cars";

import type { CarType } from "../../src/types";
import { Layout } from "../../src/components/layout";

export async function getServerSideProps(props) {
  const { params } = props;
  const cars = await getCars();
  const car = cars.find((c) => c.id === params.id);
  return {
    props: {
      ...car,
    },
  };
}

export default function CarDetails({ id, imageUrl }: CarType) {
  console.log(imageUrl);
  return (
    <Layout>
      <div>
        Shop - {JSON.stringify(id)}
        <Image
          src={`${imageUrl}`}
          alt="cool car stuff"
          width={200}
          height="200"
        />
      </div>
    </Layout>
  );
}
