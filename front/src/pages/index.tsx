import Head from 'next/head'

import Shell from '../components/shell';
import Map from '../components/Map';

export default function Home() {
  return (
    <>
    <Head>
      <script
        type="text/javascript"
        src="https://js.api.here.com/v3/3.1/mapsjs-core.js">
      </script>
      <script
        type="text/javascript"
        src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
      ></script>
      <script
        type="text/javascript"
        src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"
      ></script>
      <script
        type="text/javascript"
        src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"
      ></script>
    </Head>
    <Shell>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="bg-white h-full sm:h-1/2 w-full sm:w-2/4 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Til B
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Get from A to B.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <div className="w-full h-96 flex bg-yellow-300">
            <Map />
          </div>
        </div>
      </div>
    </Shell>
    </>
  );
}
