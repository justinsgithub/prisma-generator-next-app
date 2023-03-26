import 'prisma-generator-next/dist/primitive.css'

export const Pform = () => {
  return (
    <main className='container'>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='First Name' />
        <label htmlFor='choose'>Select</label>
        <select id='choose'>
          <option disabled selected>
            Please select
          </option>
          <option value='option-1'>Option 1</option>
          <option value='option-2'>Option 2</option>
        </select>
        <label htmlFor='comments'>Additional Comments</label>
        <textarea id='comments'></textarea>
        <label>
          <input type='checkbox' />
          Remember me
        </label>
        <input type='submit' value='Submit' />
      </form>
      <table>
        <thead>
          <tr>
            <th>Head 1</th>
            <th>Head 2</th>
            <th>Head 3</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Footer 1</th>
            <th>Footer 2</th>
            <th>Footer 3</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Description 1</td>
            <td>Description 2</td>
            <td>Description 3</td>
          </tr>
          <tr>
            <td>Description 1</td>
            <td>Description 2</td>
            <td>Description 3</td>
          </tr>
          <tr>
            <td>Description 1</td>
            <td>Description 2</td>
            <td>Description 3</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>
          List item one
          <ul>
            <li>Nested list item</li>
          </ul>
        </li>
        <li>List item two</li>
        <li>List item three</li>
      </ul>
      <dl>
        <dt>Definition Title One</dt>
        <dd>First definition description</dd>
        <dt>Definition Title Two</dt>
        <dd>First definition description</dd>
      </dl>
      <pre>
        <code>
          {`class Voila {

              public: // Voila static const string VOILA = "Voila"; 

          }`}
        </code>
      </pre>
      <div className='small-container'>Small</div>
      <div className='medium-container'>Medium</div>
      <div className='container'>Large</div>
      <div className='flex-row'>
        <div className='flex-small'>small</div>
        <div className='flex-small'>small</div>
      </div>
      <div className='flex-row'>
        <div className='flex-large'>large</div>
        <div className='flex-large'>large</div>
      </div>
      <div className='flex-row'>
        <div className='flex-large one-fourth'>large</div>
        <div className='flex-large 3-fourth'>large</div>
      </div>
    </main>
  )
}
