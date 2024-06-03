import React from "react";

function Table({ data }) {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          {data[0]?.name ? (
            <>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Active</th>
            </>
          ) : (
            <>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Mall</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Rating</th>
              <th className="py-2 px-4 border-b">Category</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {data[0].name ? (
              <>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.city}</td>
                <td className="py-2 px-4 border-b">{item.category}</td>
                <td className="py-2 px-4 border-b">{item.type}</td>
                <td className="py-2 px-4 border-b">{item.active}</td>
              </>
            ) : (
              <>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.mall}</td>
                <td className="py-2 px-4 border-b">{item.address}</td>
                <td className="py-2 px-4 border-b">{item.rating}</td>
                <td className="py-2 px-4 border-b">{item.category}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
