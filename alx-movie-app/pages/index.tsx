import Button from "@/components/commons/Button";
import { useRouter } from "next/router";
const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[#171D22] text-white">
      <section
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            'url("https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg")',
        }}
      >
        <div className="flex flex-col justify-center items-center bg-black bg-opacity-50 h-full text-center">
          <h1 className="mb-8 font-bold text-5xl md:text-7xl">
            Discover Your Next Favorite{" "}
            <span className="text-[#E2D609]">Movie</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-2xl">
            Explore the latest blockbuster movies, critically acclaimed films,
            and your personal favorites – all in one place.
          </p>
          <Button
            title="Browse Movies"
            action={() => router.push("/movies", undefined, { shallow: false })}
          />
        </div>
      </section>

      <section className="bg-[#121018] px-8 md:px-44 py-16 text-center">
        <h2 className="mb-8 font-semibold text-3xl md:text-5xl">
          Join CineSeek Now!
        </h2>
        <p className="mb-12 text-lg md:text-2xl">
          Sign up today to get access to the latest movies, exclusive content,
          and personalized movie recommendations.
        </p>
        <Button title="Get Started" />
      </section>
    </div>
  );
};

export default Home;
