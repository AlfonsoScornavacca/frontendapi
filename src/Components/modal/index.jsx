import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./styles";

const BaseModal = ({open ,onClose, submite, disableSubmite, title, content, subTitle}) => {

    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Box sx={styles.wrapper}>
                <Box sx={styles.content}>
                    <Typography
                        id='modal-modal-title'
                        variant="h6"
                        component='h2'>
                        
                        {title}
                    </Typography>
                    <Typography id = 'modal-modal-description' sx={{mt:2}}>
                        {subTitle}
                    </Typography>
                    {content}
                    <Box sx={styles.buttons}>
                        <Button onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button variant="countained"
                                onClick={submite}
                                disabled={disableSubmite}>
                            Enviar    
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}
export default BaseModal;