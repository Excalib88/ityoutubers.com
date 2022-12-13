import Head from 'next/head'
import Image from 'next/image'
import channels from './api/data/channels.json'

function humanNumber (value) {
  const num = parseInt(value, 10);
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(0).replace(rx, "$1") + item.symbol : "0";
}

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>ITYouTubers — сообщество создателей IT контента</title>
        <link rel="icon" type="image/png" href="/fav.png" />
      </Head>

      <main>
        <div className="container mx-auto pb-20">
          <h1 className="pb-10 pt-5">
            <Image width="400" height="98" alt="IT Youtubers" src="/ityoutubers-logo.jpg" />
          </h1>
          <p className="w-1/2 mb-20">
            ITYouTubers — сообщество каналов с IT контентом. Мы собрались, чтобы сделать IT контент лучше и доступнее. Мнения участников наверняка расходятся по многим вопросам, мы стараемся фокусироваться на IT.
          </p>

          <div id="channels" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {channels
              .sort((a, b) => parseInt(a.statistics.subscriberCount) > parseInt(b.statistics.subscriberCount) ? -1 : 1)
              .map(({id, snippet, statistics}) => 
              <div key={id} className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                  <a href={`https://youtube.com/channel/${id}`}><Image width={144} height={144} alt="" className="rounded-full w-40" src={snippet.thumbnails.medium.url} /></a> 
                </div>
                <div className="col-span-2">
                  <a href={`https://youtube.com/channel/${id}`}>{snippet.title}</a> 
                  <p>{snippet.customUrl} • {humanNumber(statistics.subscriberCount)}</p>
                  <p className="line-clamp-4 text-xs">{snippet.description}</p>
                </div>
              </div>
            )}
          </div>

          <p className="pt-5 mt-20">Сделано с помощью 💩 🪵 🌀 в 2022</p>
        </div>

        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/5930551.js"
        ></script>
      </main>
    </div>
  )
}
