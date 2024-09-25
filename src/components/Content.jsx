const Content = ({ currencyData, loading }) => {
  return (
    <main className="flex flex-col items-center p-6 ">
      <h3>Table Display Rate Currencies</h3>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full border-collapse border border-slate-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border border-slate-300">
                Currency
              </th>
              <th className="px-4 py-2 text-left border border-slate-300">
                We Buy
              </th>
              <th className="px-4 py-2 text-left border border-slate-300">
                Exchange Rate
              </th>
              <th className="px-4 py-2 text-left border border-slate-300">
                We Sell
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-4 py-2 border border-slate-300">
                  Loading...
                </td>
              </tr>
            ) : (
              Object.keys(currencyData).map((key) => (
                <tr key={key}>
                  <td className="px-4 py-2 border border-slate-300">{key}</td>
                  <td className="px-4 py-2 border border-slate-300">
                    {(currencyData[key] * 1.02).toFixed(4)}
                  </td>
                  <td className="px-4 py-2 border border-slate-300">
                    {parseFloat(currencyData[key]).toFixed(4)}
                  </td>
                  <td className="px-4 py-2 border border-slate-300">
                    {(currencyData[key] * 0.98).toFixed(4)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Content;
