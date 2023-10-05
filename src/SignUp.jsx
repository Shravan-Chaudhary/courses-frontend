

function SignUp () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      marginTop: 150
    }}>
      <div>
        <h1>Welcome to Coursera. Sign Up below</h1>
      </div>

      <div style={{
        border: '2px solid black',
        width: 400
      }}>
        Username - <input type="text"/>
        <br/><br/>
        Password - <input type="password"/>
        <br/><br/>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default SignUp