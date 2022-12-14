import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });


function RadioV2() {
  return (
    <div>
        <div className="question_box" 
        style={{
            backgroundColor:'#EAFBED',
            height:'100%',
            paddingBottom:'30px'}}>
            <br/>
            <div className='question_part' 
            style={{
                margin:'auto',
                width:'50%'
            }}>
                <div className='question_title'>
                    <div className='question_top' 
                    style={{
                        backgroundColor:'white',
                        borderTopWidth: '8px',
                        borderRadius: '8px',
                        paddingTop: '30px',
                        paddingLeft: '25px',
                        paddingBottom: '30px'
                    }}>
                        <input type='text' className='question_name' 
                        style={{
                            color:'black',
                            boxSizing:'border-box',
                            fontSize:'32px',
                            fontWeight:'400',
                            lineHeight:'40px',
                            lineHeigth:'135%',
                            width:'100%',
                            border:'none',
                            outline:'none',
                            height: '35px'
                        }} 
                        placeholder="Titel"></input>
                           <FormControl>
                                <RadioGroup
                                    defaultValue="Options"
                                    aria-labelledby="demo-customized-radios"
                                    name="customized-radios"
                                >
                                    <FormControlLabel value="option1" control={<BpRadio />} label="Option1"/>
                                    <FormControlLabel value="option2" control={<BpRadio />} label="Option2"/>
                                    <FormControlLabel value="option3" control={<BpRadio />} label="Option3"/>
                                    <FormControlLabel
                                    value="disabled"
                                    disabled
                                    control={<BpRadio />}
                                    label="(Disabled option)"
                                    />
                                </RadioGroup>
                            </FormControl>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RadioV2