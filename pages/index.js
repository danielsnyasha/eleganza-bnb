import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";
import data_ from "../components/data";
import new_data from "@/components/new_data";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

export default function Home({ data }) {
  return (
    <div className="bg-white h-screen">
      <Head>
        <title>Eleganza Shop</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}

      <Banner />

      <main className="max-w-screen-7xl mx-auto px-8 sm:px-16">
        <section className="pt-4 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {data_?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>

          
        </section>

        <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          
            {new_data?.map(({img, title})=>(
              <MediumCard
              key={img}
              img={img}
              title={title}/>

            ))}
            </div>
        </section>

        <LargeCard
        img='https:links.papareact.com/4cj'
        title='The Greatest Outdoors'/>

        {/* ProductFeed */}
      </main>

      <Footer/>


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
