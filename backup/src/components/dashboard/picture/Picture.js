

import React from 'react'
import { withRouter } from "react-router-dom"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import {updatePicture, updateUser} from '../../../store/actions/UserActions'
import './Picture.css'


class Picture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {file: '',imagePreviewUrl: ''}
    this.handleImageChange=this.handleImageChange.bind(this)
  }

  componentDidMount() {
    console.log("did mount ",this.props.cov_user)
    this.setState({ file:this.props.cov_user.cov_picture })
 }

  updateData() {
    var formData = new FormData()
    formData.append('picture', this.state.file)
    console.log("file donne ",this.state.file.name)

    let file_name = this.state.file.name 

    this.props.dispatch(updatePicture(file_name))

    this.props.dispatch(updateUser(this.props.cov_user, this.props.token))
        .then(() => {
          console.log("UPDATE DONE WITH SUCESS ")
        })
        .catch(error => {
          console.log("ERROR UPDATE ",error)
        })
  }

  handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]
    console.log("file ",file)

    reader.readAsDataURL(file)
    
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
      this.updateData()         
    }
  }

  render() {
    console.log("debut ",this.props)
    let imagePreviewUrl = this.state.imagePreviewUrl
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img id="picture_img" src={imagePreviewUrl} alt='' accept='image/*' />)
    } else {
      $imagePreview = (<div className="previewText"></div>)
    }

    return (
      <Container className="picture-container">
      <Row>
        <Col>
        <br />
        <div className="previewComponent"> 
        <p className="picture-text">Choisissez une photo de profil </p>
         <div className="imgPreview">
          {$imagePreview}
        </div>
        <br /> 
        </div> 
        </Col>
        <Col>
        <br />
        <div className="Widget-sidebar PictureUpload-help">
       
        <span className="PictureUpload-howto picture-text">Critères photo</span>
        <br />
        <ul className="u-reset">
            <li className="margin-half-top">
                <span>Pas de lunettes de soleil</span>
            </li>
            <li className="margin-half-top">
                <span>Face à l'objectif</span>
            </li>
            <li className="margin-half-top">
                <span>Un seul visage</span>
            </li>
            <li className="margin-half-top">
                <span>Claire et lumineuse</span>
            </li>
        </ul>
    </div>
        </Col>
      </Row>
      <Row>
      <Col>
        <form id="picture_form">
        <div className="hide">
          <input type="file"  onChange={this.handleImageChange} id="profile_picture_originalPicture" name="profile_picture[originalPicture]" required="required" accept="image/png" className="file-photo" />
          <input type="hidden" id="profile_picture_editedPicture" name="profile_picture[editedPicture]" data-picture-upload="imagedata" />
        </div>
          <label className="submitButton" htmlFor="profile_picture_originalPicture"> Choisir une photo</label>
          <br />
          {
          /*
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
            */
          }
        </form>
    
        </Col>
      </Row>
      <br />
    </Container>
      

    )
  }
}
  
const mapStateToProps = (state) => {
  return {
      cov_user: state.cov_user,
      token: state.auth.token
  }
}

export default withRouter(connect(mapStateToProps)(Picture))