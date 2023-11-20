const WordList = () => {
  const DX = [
    {
      id: "1-word-a",
      word: "a",
      meaning: "un",
      type: "indefinite article",
    },
  ];
  return (
    <div className="flex justify-center">
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Meaning</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {DX.map((data) => (
            <tr key={data.id}>
              <td>{data.word}</td>
              <td>{data.meaning}</td>
              <td>{data.type}</td>
              <td>
                <button className="rounded-full bg-blue-500 w-[4rem] m-2">
                  Notes
                </button>
                <button className="rounded-full bg-green-500 w-[4rem] m-2">
                  Edit
                </button>
                <button className="rounded-full bg-red-500 w-[4rem] m-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordList;
