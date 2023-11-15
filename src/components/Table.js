
import '../App.css';





function Table() {
  return (
    
    <div className='table'>
        <div className='filter'><h3>Account Watchlist</h3></div>
        <table>
        <thead>
        <tr>
         
          <th className='fi'>Account</th>
          <th>This Month</th>
          <th>YD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td className='fi'>Sales</td>
          <td>1,194,58</td>
          <td>11,418,29</td>
        </tr>
        <tr>
          
          <td className='fi'>Advertizing</td>
          <td>6872.02</td>
          <td>9271.36</td>
        </tr>
        <tr>
          
          <td className='fi'>inventory</td>
          <td>4,692.26</td>
          <td>9,768.09</td>
        </tr>
        <tr>
          
          <td className='fi'>Entertainment</td>
          <td>0.00</td>
          <td>0.00</td>
        </tr>
        <tr>
          
          <td className='fi'>Product</td>
          <td>4652.10</td>
          <td>2529.90</td>
        </tr>
          </tbody>
        </table>
    </div>
    
  );
}

export default Table;
