import React from 'react'

let TeamStyle = {
    backgroundColor: '#228B22',
    color : 'white',
    padding: '10px'
}
let NameStyle = {
    backgroundColor: '#9ACD32',
    height: '50px',
    paddingTop: '20px'
}

let boxStyle = {
    border : '2px solid gray',
    textAlign : 'center',
    marginTop : '10px',
    width: '300px',
    fontSize: '15px'

}



const Member = (props) => {
  return (
    <div style={boxStyle}>
        <div style={TeamStyle}>{props.teamName}</div>
        <div style={NameStyle}>{props.MemberName}</div>
    </div>
  )
}

export default Member