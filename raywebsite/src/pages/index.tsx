// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component

class IndexPage extends React.Component {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div>
        <Layout pageTitle = "Home Page">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi est, aliquam at ultricies a, placerat et urna. Aliquam vehicula maximus orci at consequat. Morbi semper maximus pretium. Quisque eget enim at libero pretium suscipit. Ut augue eros, aliquam nec sagittis ut, scelerisque id arcu. Vestibulum quis justo gravida, vehicula odio non, facilisis dolor. Donec pulvinar, mi nec semper imperdiet, urna ante ornare eros, sit amet pulvinar dui tellus quis massa. Proin faucibus tortor urna, vitae maximus tortor fringilla at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque lobortis mauris ac mi consequat pretium. Cras viverra sodales lacus, quis finibus nisi venenatis ut. Proin pharetra bibendum convallis. Sed quis ante sapien. Duis auctor nisl velit, finibus posuere purus scelerisque non.

            Nulla sit amet lectus eget nulla eleifend lacinia. Sed ligula mi, bibendum ac sagittis quis, semper vel ipsum. Aenean dictum, turpis id rhoncus tristique, sem dolor luctus odio, a efficitur sem erat nec diam. Cras hendrerit sed risus eget consectetur. Ut ac euismod nibh. Proin egestas eleifend diam, quis fermentum arcu porttitor et. Aliquam erat volutpat. Praesent non justo eu purus sagittis finibus. Sed facilisis lacus eu enim auctor aliquet. Mauris semper sed augue sed faucibus. Nullam tortor est, ultricies vitae turpis nec, malesuada tincidunt metus.

            Nunc non sem mollis, dapibus ante id, tristique diam. Aenean sed odio porta, vulputate ligula nec, interdum nunc. Praesent varius tortor lacinia nunc porta vulputate. In luctus arcu at sapien faucibus mollis. Nunc malesuada elit convallis odio eleifend, quis suscipit justo tincidunt. Maecenas egestas erat id mauris convallis, et pellentesque velit egestas. Nulla at nulla dolor. Vestibulum a sapien ut eros vulputate rutrum vitae feugiat elit. Aliquam feugiat tincidunt nisi non finibus. Cras vel condimentum magna, ut ullamcorper nulla. Pellentesque scelerisque erat quis risus venenatis, sed tincidunt sem fringilla. Suspendisse eu augue ac mi finibus vehicula vitae quis lectus. Vestibulum scelerisque enim rutrum, feugiat mi consequat, dictum justo. Nulla fermentum urna lorem, ut dictum ipsum sollicitudin posuere.

            Sed fringilla sapien non viverra molestie. Suspendisse augue eros, laoreet eu nibh ut, varius bibendum lacus. Donec bibendum magna quis finibus posuere. Donec sapien risus, fringilla luctus ex et, congue scelerisque urna. Suspendisse potenti. Maecenas dictum nec orci a interdum. Quisque imperdiet mi nisi, eu luctus ante consequat vitae. Sed fermentum magna nec justo malesuada convallis. Curabitur mi tortor, lacinia eget dignissim quis, elementum ac nisi. Suspendisse potenti. Aenean eu efficitur ipsum, id pulvinar metus. Ut condimentum rhoncus est, quis porttitor dui mattis sit amet.

            Quisque faucibus ante ac eros scelerisque, sit amet euismod ante eleifend. Aliquam dignissim, magna vitae consectetur porta, odio neque porta lacus, et condimentum ex odio in erat. Vivamus tincidunt accumsan elit, nec varius est vehicula eu. Nunc condimentum felis sit amet orci efficitur, vitae iaculis massa aliquam. Cras fermentum at nisl vel pretium. Cras sit amet faucibus nunc. Aliquam ipsum orci, cursus a velit sed, venenatis viverra quam. Nulla leo est, hendrerit eu pharetra ut, varius eget lorem. Pellentesque pretium hendrerit ipsum, at ullamcorper nunc ullamcorper non.
          </p>
        </Layout>
      </div>
    )
  }
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Does anyone read these?</title>

// Step 3: Export your component
export default IndexPage