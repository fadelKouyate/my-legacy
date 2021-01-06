import React from 'react'
import { Col, Row, Card, CardHeader, CardBody, Button, FormFeedback, Form, Input } from 'reactstrap'
import { connect } from 'react-redux'
import UserActions from '../../../store/actions/UserActions'
import './Picture.css'
import { SIZE_MAX } from '../../../config/Picture'
import Avatar from '@material-ui/core/Avatar';
import Photo from '../../../assets/img/Capture.PNG'
import Message from '../../Tools/Message/Message'

class Picture extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      file: '',
      message: '',
      imagePreviewUrl:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sizeMax = 30000000
  }

  checkFile(file) {
    let { type, size } = file
    var message = ""
    var result = true
    if (! type.startsWith("image")) {
      message = "veuillez choisir une image correcte"
      result = false
    }

    else if(parseInt(size) > parseInt(SIZE_MAX)) {
      message = "taille max de l' image dépassée"
      result = false
    }

    return { result: result, message : message}
  }

  async updateData() {

    let { dispatch} = this.props;
    let { file } = this.state;
    dispatch(UserActions.uploadPicture(this.props.cov_user.cov_mail, this.state.imagePreviewUrl, file, this.props.token))
      .then(() => { 
        window.location.reload();
      })
      .catch(error => {
        Message.error('Mise à jour échouée veuillez réessayer plus tard');
      })
  }

  handleSubmit() {
    this.updateData()
  }


  handleChange(e) {

    let file = e.target.files[0]

    let { result, message } = this.checkFile(file)
    if(! result)
      this.setState({ message })
    else
    {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        this.setState({
          file: file,
          message: '',
          imagePreviewUrl: reader.result
        })        
      }
      this.setState({ message: '', file })
    }
  }

  componentDidMount(){
    this.setState({imagePreviewUrl:''});
    let {cov_user} = this.props;
    if(cov_user.cov_picture){
      this.setState({
        imagePreviewUrl:cov_user.cov_picture
      });
    }
  } 

  render() {  
    let  { message, imagePreviewUrl } = this.state;
    return (
      <div className="animated fadeIn profile-picture">
        <br />
         <Row className="justify-content-center center"> 
            <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <strong>Photo</strong>
              </CardHeader>
              <CardBody>
              <Row className="justify-content-center">
                <Form onSubmit={(e) => this.handleSubmit(e)} noValidate>
                  <Row className="justify-content-center">
                    <p>
                    <strong>Ajouter une photo de profil</strong>
                    </p>
                  </Row>
                  <div id="picture-zzone">
                    <Avatar alt="Remy Sharp" src={imagePreviewUrl} width="250" height="250" />
                  </div>

                  <Input type="hidden" invalid={message !== ""} />
                  <FormFeedback> { message } </FormFeedback>

                  <div className="image-upload">
                    <label htmlFor="file-input">
                      <img alt="alt" src={Photo} />
                    </label>
                    <input id="file-input" type="file"  onChange={this.handleChange} accept='image/*'/>
                  </div> 
                  <Row className="justify-content-center">
                      <div>
                        <Button className="profile-btn" color="success" size="md" onClick={this.handleSubmit}>Valider</Button>
                        <p>
                          &nbsp;
                        </p>
                      </div>
                  </Row>
                  </Form>
                </Row>
              </CardBody>
             </Card>
            </Col>       
          </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cov_user: state.cov_user,
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Picture)