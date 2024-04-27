import Image from "next/image";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="h-full w-full">
      <div className="my-12 w-full mx-auto">
        <h1 className="text-4xl text-purple-500 text-center font-bold">
          Japan
        </h1>
        <p className="text-center w-full mx-auto  font-medium my-2">
          Where tradition meets innovation
        </p>
        <div className="mx-auto my-12 w-[75%]">
          <h1 className="font-semibold mb-3 text-3xl">Culture</h1>
          <p className="mb-14">
            The Japanese culture is rich and diverse, with a long history that
            has been shaped by various influences over the centuries. Some key
            aspects of Japanese culture include:
            <br />
            <br />
            <br /> 1. Traditional arts: Japan has a long tradition of various
            art forms such as tea ceremony, flower arranging (ikebana),
            calligraphy, and traditional theater such as Noh and Kabuki.
            <br />
            <br /> 2. Cuisine: Japanese cuisine is known for its emphasis on
            fresh, seasonal ingredients and presentation. Some popular dishes
            include sushi, sashimi, tempura, and ramen.
            <br />
            <br /> 3. Festivals: Japan has a wide range of traditional festivals
            throughout the year, celebrating everything from the changing of the
            seasons to historical events.
            <br />
            <br /> 4. Language: The Japanese language is unique in its writing
            system, which includes kanji (characters borrowed from Chinese) as
            well as hiragana and katakana (two phonetic alphabets).
            <br />
            <br /> 5. Religion: Shinto and Buddhism are the two main religions
            in Japan, and many aspects of Japanese culture are influenced by
            these beliefs.
            <br />
            <br /> 6. Fashion: Japan is known for its unique and innovative
            fashion trends, from traditional kimono to modern street fashion.
            <br />
            <br /> 7. Technology: Japan is a leader in technology and
            innovation, with companies like Sony, Toyota, and Nintendo making a
            global impact.
            <br />
            <br /> Overall, Japanese culture is a fascinating blend of tradition
            and modernity, with a strong emphasis on respect, harmony, and
            attention to detail.
          </p>
          <Image
            className="rounded-xl object-cover"
            src="/japan-culture.jpg"
            alt="japan culture"
            width={1500}
            height={1500}
          />
        </div>
      </div>
      <div className="w-[75%] mx-auto">
        <h1 className="text-3xl mb-4 font-semibold ">Mount fuji</h1>
        <p className="mb-14">
          Mount Fuji, also known as Fuji-san, is the highest mountain in Japan
          and an iconic symbol of the country.
          <br /> It is an active stratovolcano located on Honshu Island, about
          100 kilometers southwest of Tokyo. Mount Fuji is a popular tourist
          destination and a sacred site in Japanese culture.
          <br /> It is a UNESCO World Heritage Site and attracts millions of
          visitors each year who come to hike, climb, or simply admire its
          beauty from afar.
        </p>
        <Image
          className="rounded-xl object-cover"
          src="/mount-fuji.jpg"
          alt="mount fuji"
          width={1500}
          height={1500}
        />
      </div>
      <div className="w-[75%] my-12 mx-auto">
        <h1 className="text-3xl mb-4 font-semibold">Food</h1>
        <p className="mb-12">
          Japanese cuisine is known for its emphasis on fresh, seasonal
          ingredients and presentation. Some popular Japanese dishes include:
          <br />
          <br /> - Sushi: raw fish served on vinegared rice, often accompanied
          by soy sauce, wasabi, and pickled ginger.
          <br />
          <br /> - Ramen: a noodle soup dish with a savory broth, topped with
          various ingredients such as sliced pork, green onions, and boiled egg.
          <br />
          <br />- Tempura: deep-fried seafood or vegetables coated in a light,
          crispy batter.
        </p>
        <Image
          className="my-3 rounded-xl object-cover"
          src="/sushi.jpg"
          alt="sushi"
          width={1200}
          height={1200}
        />
        <p className="my-12">
          - Yakitori: skewered and grilled chicken (or other meats) served with
          a savory soy-based sauce.
          <br />
          <br /> - Okonomiyaki: a savory pancake made with cabbage and various
          toppings such as seafood, meat, and vegetables.
          <br />
          <br /> - Takoyaki: small, round balls of batter filled with pieces of
          octopus, cooked in a special takoyaki pan and topped with savory
          sauce, mayonnaise, and bonito flakes.
          <br />
          <br /> - Onigiri: rice balls filled with various ingredients such as
          pickled plum, salmon, or tuna, wrapped in seaweed. Japanese cuisine
          also includes a variety of traditional cooking techniques such as
          grilling (yakimono), simmering (nimono), and steaming (mushimono).
          <br />
          <br />
          Additionally, Japanese food is often served with a variety of
          condiments and seasonings such as soy sauce, miso paste, and dashi (a
          broth made from fish and seaweed). Overall, Japanese food is known for
          its balance of flavors, attention to detail, and beautiful
          presentation. It is a popular and widely enjoyed cuisine around the
          world.
        </p>
        <Image
          className="rounded-xl object-cover"
          src="/ramen.jpg"
          alt="ramen"
          width={1200}
          height={1200}
        />
      </div>
      <div className="w-[75%] mx-auto">
        <h1 className="text-4xl font-semibold mb-4">Technology</h1>
        <p className="mb-14">
          Japanese technology is known for its innovation, high quality, and
          precision.
          <br /> Japan is a global leader in various technological fields such
          as robotics, electronics, automotive, and telecommunications.
          <br /> Some of the notable Japanese tech companies include Sony,
          Toyota, Panasonic, and Toshiba. Japanese technology is also known for
          its focus on efficiency, sustainability, and cutting-edge research and
          development.
          <br /> The country's advancements in technology have had a significant
          impact on various industries and have helped shape the global tech
          landscape.
          <br />
          <br />
          Japan has had a huge impact on the development of many technologies we
          know today. Not only did the country spearhead the emergence of
          various gadgets and technologies that didn’t exist and are now crucial
          parts of our lives, but they also have proven to the world that
          Japanese technology is something to look out for.
          <br />
          <br /> For a long time, especially after the late ‘70s, when Japan’s
          miracle growth started to take effect on an international scale, it
          seemed like any new flashy tech that was developed in Japan would
          eventually make its way into the United States and the rest of the
          world. However, nowadays, we see that this is hardly the case anymore.
          <br />
          <br /> Of course, when you look at a “day in the life” type vlog of a
          Japanese person, or better yet, of a foreigner who’s living abroad in
          Japan, we still see various technologies that seem to make life easier
          or more convenient but are nowhere to be found in the rest of the
          world.
        </p>
        <Image
          className="rounded-xl object-cover"
          src="/tech.jpg"
          alt="tech"
          width={1500}
          height={1200}
        />
      </div>
      <div className="w-[75%] my-12 mx-auto">
        <h1 className="text-4xl mb-4 font-semibold">Conclusion</h1>
        <p>
          Japan, a captivating island nation in East Asia, boasts a rich
          tapestry of culture, innovation, and tradition. Nestled amidst its
          mountainous terrain and lush forests, Japan is renowned for its
          ancient customs such as tea ceremonies and Kabuki theater, as well as
          its technological prowess, with global giants like Sony and Toyota
          calling it home.
          <br /> With a highly developed economy driven by industries like
          automotive manufacturing and electronics, Japan stands as a beacon of
          innovation and efficiency. Its society, deeply rooted in the values of
          harmony and respect, offers a unique blend of modern lifestyle and
          traditional practices, reflected in its culinary delights and
          impeccable service culture.
          <br /> Despite facing demographic challenges, Japan continues to play
          a significant role on the global stage, maintaining strong diplomatic
          ties and leaving an indelible mark on the worlds of culture,
          technology, and commerce.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
