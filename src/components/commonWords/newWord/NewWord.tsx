const NewWord = () => {
  return (
    <div>
      <form className="grid justify-center w-full mb-5 ">
        <h2 >Add New Word</h2>
        <label>
          <p>Word</p>
          <input type="text" />
        </label>
        <label>
          <p>Meaning</p>
          <input type="text" />
        </label>
        <label>
          <p>Type</p>
          <select name="" id="">
            <option value=""></option>
            <option value="eeee">fgdgdfgfdgfdgdf</option>
          </select>
        </label>
        <label>
          <p>Examples</p>
          <textarea name="" id="" cols={25} rows={4}></textarea>
        </label>
        <label>
          <p>Notes</p>
          <textarea name="" id="" cols={25} rows={4}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewWord;
