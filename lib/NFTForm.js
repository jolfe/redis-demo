import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function NFTForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());
    console.log(data);
    const res = await fetch("/api/nfts", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const json = await res.json();
    console.log(json);
  };
  return (
    <>
      <MDBCard style={{ maxWidth: "auto" }}>
        <MDBCardBody>
          <MDBCardTitle>Crypto/Stock Data Sorting with Redis Demo</MDBCardTitle>
          <MDBCardText>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <span>
                  Enter your Stock/NFT symbol, and the type of data you are
                  trying to fetch (e.g. stock, NFT, etc.)
                </span>
                <div>
                  <label htmlFor="Symbol">Symbol</label>
                  <input
                    name="Symbol"
                    type="text"
                    placeholder="ex: AAPL, BTC, ETH"
                  />
                </div>
                <div>
                  <label htmlFor="Type">Type</label>
                  <input
                    name="Type"
                    type="text"
                    placeholder="ex: Stock, NFT, etc."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
