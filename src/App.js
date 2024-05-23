import Table from "./components/table/table.js"
import Image from "./components/image/image.js"
import Form from "./components/form/form.js"
import Button from "./components/button/button.js"
import List from "./components/list/list.js"
function Hello()
{
  return(
    <div>
      <h1>hello world</h1>
      <Table/>
      <Image/>
      <Form/><br/>
      <Button/>
      <List/>
    </div>
  )
}
export default Hello