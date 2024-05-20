import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>


<footer class=" bg-dark text-white">
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-3">
          <h5>Contact Info</h5>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div class="col-md-3">
          <h5>Social Media</h5>
          <ul class="list-unstyled">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div class="col-md-3">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="./topanime">Top Anime</Link></li>
              <li> <Link to="./myanime">My Anime</Link></li>
              
            </ul>
          </div>
        <div class="col-md-3">
          <h5>Subscribe Now</h5>
          <form>
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Enter your email"/>
              <button type="submit" class="btn btn-secondary">Subscribe</button>
            </div>
          </form>     
        </div>
      </div>
      
      
    </div>
  </footer>

        </>
     );
}
 
export default Footer;