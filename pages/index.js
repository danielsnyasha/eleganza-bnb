import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";
import  data_  from "../components/data";



export default function Home({data}) {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Eleganza Shop</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}

      <Banner />

      <main className="max-w-screen-7xl mx-auto px-8 sm:px-16">
        <section className="pt-4 ">
          <h2 className="text-3 xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
         



          {data_.map(({img, distance, location}) => (
            <SmallCard key={img} img={img} distance={distance} location={location} />
  
))}

          <h3>Test</h3>
        </section>

        {/* ProductFeed */}
      </main>
    </div>
  );
}
// export async function getStaticProps() {
//   try {
//     const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());

//     return {
//       props: {
//         exploreData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     return {
//       props: {
//         exploreData: [],
//       },
//     };
//   }
// }
