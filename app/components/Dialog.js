import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { LoadingButton } from '@mui/lab';



export default function FormDialog({open,setOpen,espanol}) {
    const text = espanol ? `Ponete en contacto conmigo y en breve te responderé` : `Contact me and I'll answer you soon`;
    const contacto = espanol ? `Contacto` : `Contact`;
    const cancelar = espanol ? `Cancelar` : `Cancel`;
    const enviar = espanol ? `Enviar` : `Send`;
    const [sentMail,setSentMail] = React.useState(false);
    const [errMail,setErrMail] = React.useState(false);
    const [blockSend,setBlockSend] = React.useState(false);



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            setBlockSend(true)
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            var data = {
                service_id: 'service_24zahca',
                template_id: 'template_wcq6rrs',
                user_id: '41HCVHUcUyu9BI-vh',
                template_params: {
                    'from_name': formJson.email,
                    'message': formJson.mensaje,
                    'to_name': 'squizzato.fabio@gmail.com'
                }
            }
            axios.post('https://api.emailjs.com/api/v1.0/email/send',data)
            .then(function(){
                setSentMail(true)
                setTimeout(()=>{
                    setSentMail(false)
                    handleClose()
                    setBlockSend(false)
                },5000)
            })
            .catch(function(err){
                console.log({err})
                setErrMail(true)
                setTimeout(()=>{
                    setErrMail(false)
                    setBlockSend(false)
                },5000)
            })
          },
        }}
      >
        <DialogTitle>{contacto}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {text}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label={espanol ? "Tu correo electrónico" : "Your Email Address"}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="mensaje"
            name="mensaje"
            label={espanol ? "Mensaje" : "Message"}
            type="email"
            fullWidth
            multiline
            maxRows={3}
            variant="standard"
          />
          {sentMail && <Alert severity="success">{espanol ? `El correo fue enviado correctamente, en breves me pondré en contacto. Gracias.` :`The mail was sent successfully. I'll contact you soon. Thanks.`}</Alert>}
          {errMail && <Alert severity="error">{espanol ? `Ocurrió un error al enviar el correo, vuelve a intentarlo` : `An error has ocurred. Please, try again`}</Alert>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{cancelar}</Button>
          {blockSend ?  <LoadingButton loading variant="outlined">Submit</LoadingButton> : <Button type="submit">{enviar}</Button>}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
