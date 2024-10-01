import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { GoogleLogin } from "@react-oauth/google"

export default function RegistrationPage2() {

  const handleLoginSuccess = async (response) => {
    console.log('Login Success:', response.credential);
    const token  = response.credential
    const res = await fetch("http://localhost:3000/auth/google",{
      method:"POST",
      mode:"cors",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Securely sending the token

      },
      body: JSON.stringify({token}), // Token is sent here as well for redundancy

    })
    const resAns = await res.json()
    console.log(resAns);
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
  };

  const githubAuth = () => {
    const url = "https://github.com/login/oauth/authorize?client_id=Ov23lipQIGcQbf666slk&redirect_uri=http://localhost:3000/github/callback&scope=user"
    window.location.href = url
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">Create your account</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <a href="#" className="font-normal  text-primary hover:text-primary-foreground " >
              sign in to your existing account
            </a>
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="name" className="block text-sm font-normal text-muted-foreground text-left">
              Name
            </Label>
            <div className="mt-1">
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm border-gray-300"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-normal text-muted-foreground text-left">
              Email address
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm border-gray-300"
              />
            </div>
          </div>
          {/* <div>
            <Label htmlFor="password" className="block text-sm font-normal text-gray-500 text-center">Passwordless auth :)</Label>
          </div> */}
          {/* <div>
            <Label htmlFor="password" className="block text-sm font-normal text-muted-foreground text-left ">
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm border-gray-300"
              />
            </div>
          </div> */}
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center  rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-black text-white"
            >
              Sign up
            </Button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <div className="flex-1 border-t border-muted border-gray-300" />
          <div className="px-4 text-sm font-normal text-muted-foreground">Or sign up with</div>
          <div className="flex-1 border-t border-muted border-gray-300" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="flex items-center justify-center border-gray-300" onClick = {githubAuth}>
            <GithubIcon className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          {/* <Button variant="outline" className="flex items-center justify-center border-gray-300">
            <ChromeIcon className="mr-2 h-5 w-5" />
            Google
          </Button> */}
                <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}