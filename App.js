import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4F5whCbQR21YvzXI0jKqBz9Fc5UmHeIZG-b0bwaNHEEzlp3QrKBfrvg&s"
          alt="logo"
          style={{ width: "100px", height: "auto", borderRadius: "100%" }}
        />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="search-bar">
        <input type="search" name="search" id="search" />
      </div>
      <div className="res-container">
        <ResCard />
      </div>
      <Footer />
    </>
  );
};

const ResCard = () => {
  return (
    <div className="res-card">
      <div className="card">
        <img
          src="https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg"
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <h2>Restaurant Name</h2>
        <p>Restaurant Description</p>
        <p>Rating: 4.5</p>
      </div>
      <div className="card">
        <img
          src="https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg"
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <h2>Restaurant Name</h2>
        <p>Restaurant Description</p>
        <p>Rating: 4.5</p>
      </div>
      <div className="card">
        <img
          src="https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg"
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <h2>Restaurant Name</h2>
        <p>Restaurant Description</p>
        <p>Rating: 4.5</p>
      </div>
      <div className="card">
        <img
          src="https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg"
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <h2>Restaurant Name</h2>
        <p>Restaurant Description</p>
        <p>Rating: 4.5</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left ">
        <p>Follow us on:</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-right">
        <p>Contact us:</p>
        <p>© 2025 Foodie. All rights reserved.</p>
      </div>
    </div>
  );
};
function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
