import './PlansAvailable.css';
function PlansAvailable() {
  return (
    <div className="PlansAvailable">
      
      <table>
        <tr>
        
        <th>Company</th>
          <th>Plan</th>
          <th> Entry Age</th>
          <th>Sum Assured(Rs)</th>
          <th>Premium starts From(Rs)</th>
        </tr>
        <tr>
            <td><img src='https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2019/06/19/797186-apollo.jpg' width='200'></img></td>
          <td>Optima Restore</td>
          <td>18-65 years</td>
          <td>3-15 Lakhs</td>
          <td>5000</td>
        </tr>
        <tr>
          <th><img src='https://www.policybachat.com/ArticlesImages/747.jpg' width='200'></img></th>
        <td>HealthInsurance for Individual</td>
          <td>18-65 years</td>
          <td>1.5-50 Lakhs</td>
          <td>6000</td>
        </tr>
        <tr>
          <th><img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Max_Life_Insurance_logo.svg' width='200'></img></th>
        <td>HeartBeat</td>
          <td>No age limit</td>
          <td>2-50 Lakhs</td>
          <td>3750</td>
        </tr>
        <tr>
          <th><img src='http://static.businessworld.in/article/article_extra_large_image/1540812585_0rMQ17_cropped.png'width='200'></img></th>
        <td>Care HealthInsurance plan</td>
          <td>5-no upperLimit</td>
          <td>2-60 Lakhs</td>
          <td>2300</td>
        </tr>
        <tr>
          <th><img src='https://upload.wikimedia.org/wikipedia/commons/3/3e/HDFC-Ergo-logo.png' width='150'></img></th>
        <td>Health suraksha</td>
          <td>No age limit</td>
          <td>3-10 Lakhs</td>
          <td>2740</td>
        </tr>
      </table>
    </div>
  );
}
  
export default PlansAvailable;