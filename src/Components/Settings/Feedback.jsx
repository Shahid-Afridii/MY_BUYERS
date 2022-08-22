import React from 'react'
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Feedback = () => {
  return (
    <>
 <div class="mb-5 mt-5" style={styles.container}>
      <h2> Rate Your Experience </h2>
      <h2> Are you Satisfied with the service?</h2>
      {/* {Array.isArray(reviewRating)
                               ? (
                                reviewRating?.map((R) => ( */}

      <div style={styles.stars}>
      {/* {Array.from(
                                            { length: 5 },
                                            (data, i) =>
                                              i < R?.rating ? ( */}
                                                <span style={{ margin: "2px" }}>
                                                  <AiOutlineStar
                                                    style={{
                                                      color: "#f20202",fontSize:"35px",
                                                    }}
                                                  />
                                                  <AiOutlineStar
                                                    style={{
                                                      color: "#f20202",fontSize:"35px",
                                                    }}
                                                  />
                                                  <AiOutlineStar
                                                    style={{
                                                      color: "#f20202",fontSize:"35px",
                                                    }}
                                                  />
                                                  <AiOutlineStar
                                                    style={{
                                                      color: "#f20202",fontSize:"35px",
                                                    }}
                                                  />
                                                  <AiOutlineStar
                                                    style={{
                                                      color: "#f20202",fontSize:"35px",
                                                    }}
                                                  />
                                                </span>
                                              {/* ) : (
                                                <span style={{ margin: "2px" }}>
                                                  <AiOutlineStar />
                                                </span>
                                              )
                                          )} */}
        {/* {stars.map((data, index) => {
          return (
            <FaStar
              key={index}
              size={20}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })} */}
      </div>
        {/* ))
        ) : (
          <h3>  <center style={{marginTop:"-50px"}}><img src="" className='mt-5 mb-5  ' style={{width:"25%"}} />
</center></h3>
        )} */}
      <textarea
        placeholder="Tell us What can be improved"
        name="review"
        // onChange={(e) => setReview(e.target.value)}
        // value={review}
        style={styles.textarea}
      />
      <button style={styles.button} 
    //   onClick={Editreview}
       >
        Submit
      </button>
     
    </div>
    </>
  )
}
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300,
    },
    button: {
      border: "1px solid red",
      borderRadius: "5px",
      width: 300,
      padding: 10,
      background:"#f20202",
      fontWeight: 600,
      color:"white"
    },
  };
export default Feedback