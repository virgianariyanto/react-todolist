import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons"
import { useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import Input from "./components/Input"

export default function UseStage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
  })

  function submit(e){
    e.preventDefault();

    console.log(form);
  }

  return(
    <div className="bg-white w-full min-h-screen flex items-center justify-center">
        <div className="w-1/4 flex gap-x-2 tracking-tight">
          <Card>
            <Card.Title>Card Title</Card.Title>
              <form onSubmit={submit}>
                <Card.Body>
                  <p>{form.name || "---"}</p>
                  <p>{form.email || "---"}</p>
                  <div className="my-4">
                    <Input.Label htmlFor="name">Name :</Input.Label>
                    <Input id={"name"} name={"name"} value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="my-4">
                    <Input.Label htmlFor="email">Email :</Input.Label>
                    <Input id={"email"} name={"email"} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="flex gap-x-2">
                    <Button className="bg-black"><IconBrandGithub />Register</Button>
                    <Button><IconBrandTwitter />Login</Button>
                  </div>  
                </Card.Footer>
              </form>
          </Card>
        </div>
    </div>
  )
}

