import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-1  bg-gray-800 p-6 rounded-md">
          <div className="flex flex-col text-sm">
            <h2 className="text-xl text-cyan-500 font-semibold">Leagues</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center mt-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Bundesliga_Logo_%282017%29.svg/1200px-Bundesliga_Logo_%282017%29.svg.png"
                  alt="bundesliga"
                  className="h-6 w-auto"
                />
                <p>Premier League</p>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Bundesliga_Logo_%282017%29.svg/1200px-Bundesliga_Logo_%282017%29.svg.png"
                  alt="bundesliga"
                  className="h-6 w-auto"
                />
                <p>Primevera Division</p>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Bundesliga_Logo_%282017%29.svg/1200px-Bundesliga_Logo_%282017%29.svg.png"
                  alt="bundesliga"
                  className="h-6 w-auto"
                />
                <p>Bundesliga</p>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Bundesliga_Logo_%282017%29.svg/1200px-Bundesliga_Logo_%282017%29.svg.png"
                  alt="bundesliga"
                  className="h-6 w-auto"
                />
                <p>Serie A</p>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Bundesliga_Logo_%282017%29.svg/1200px-Bundesliga_Logo_%282017%29.svg.png"
                  alt="bundesliga"
                  className="h-6 w-auto"
                />
                <p>League 1</p>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/thumb/0/0c/Bundesliga_Logo_%282017%29.svg/1200px-Bundesliga_Logo_%282017%29.svg.png"
                  alt="bundesliga"
                  className="h-6 w-auto"
                />
                <p>Championship</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-2">
          <div className="flex flex-col gap-4">
            {/* kolom 2 */}
            {"123".split("").map((i) => (
              <div
                className="flex flex-col gap-4 bg-gray-800 rounded-md px-4 py-2 text-sm"
                key={i}
              >
                <div className="w-auto h-auto pt-1">
                  <div className="flex items-center justify-between rounded-md px-4 py-2 bg-slate-700">
                    <div className="flex gap-2 items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
                        alt="premier-league"
                        className="h-3 w-auto"
                      />
                      <p>Premier League</p>
                    </div>
                    <p>Sat Aug 26 2023</p>
                  </div>
                </div>
                <div className="flex justify-between  w-auto h-auto py-4 px-4 rounded-md">
                  <div className="flex gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/640px-Manchester_United_FC_crest.svg.png"
                      alt="manchester-united"
                      className="h-6 w-auto"
                    />
                    <p>Manchester United</p>
                  </div>
                  <div className="flex items-center text-center w-auto h-auto px-4 rounded-md">
                    <p>0 : 2</p>
                  </div>
                  <div className="flex gap-2  ">
                    <img
                      src="data:image/png;base64,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"
                      alt="tottenham-hotspur"
                      className="h-6 w-auto"
                    />
                    <p>Tottenham Hotspur</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* kolom 3 */}
        <div className="col-end-5 col-span-1 pl-2 rounded-md">
          <div className="flex flex-col">
            <p className="pb-4 text-xl font-semibold text-cyan-500">
              News - Top Headlines
            </p>
            <div
              className="w-full h-28 rounded-md p-2 flex bg-cover"
              style={{
                backgroundImage:
                  "url(https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg)",
              }}
            >
              <div className="flex items-end">
                <p className="text-white">Lionel Messi Got Ballon'dor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
