import React from 'react'
import { Container, Grid, Typography, useTheme, Box, Link } from '@mui/material'
import './index.css'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close'



const BenifitsofPL = () => {
    const theme = useTheme();

  return (
<Container sx={{ marginTop: '40px'}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography
        sx={{
          fontSize: '40px',
          color: '#101F30',
          fontFamily: "'Georgia', 'Times New Roman', Times, serif",
          textAlign: 'center',
          marginBottom: '40px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
          },
        }}
      >
      Benefits of personal loans
      </Typography>
        </Grid>




        <Grid item sx={12}>
        <Typography sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        Personal loans provide numerous advantages that distinguish them from credit cards and other loan types, such as:        </Typography>
        </Grid>


         
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Lump sums</span>: Upon securing a personal loan, the lender disburses the full loan amount directly into your bank account as a lump sum. This differs from borrowing against a line of credit, as with a credit card, where you access funds as required.
         </Typography>    
            </Grid>



              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Fixed APR</span>: While credit cards and personal lines of credit frequently feature variable APRs, personal loans offer fixed APRs. Consequently, even if market conditions fluctuate throughout your loan term, your minimum monthly payment remains consistent.     
        </Typography>           
        </Grid>



              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>No collateral required</span>: Since most personal loans are unsecured, you're not required to provide any collateral to the lender. Consequently, if you're unable to repay the loan, you won't face the risk of losing your property. However, failing to repay the loan will negatively impact your credit score.     
        </Typography>           
        </Grid>




              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Set repayment terms</span>: Personal loans offer a well-defined repayment schedule, providing clarity on when your debt will be completely settled. Conversely, credit cards and similar alternatives lack specific terms, potentially extending repayment over many years with only minimum payments.     
        </Typography>           
        </Grid>




              
        <Grid item sx={12}>
        <Typography className='green-dot'  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        <span style={{ color: '#454545', fontWeight: 'bold' }}>Flexible loan purposes</span>: Borrowers have the flexibility to use personal loan funds for various purposes, such as financing a wedding or managing unforeseen expenses. Nevertheless, it's crucial to recognize that many lenders restrict the use of personal loans for business endeavors or educational expenses beyond secondary education.     
        </Typography>           
        </Grid>




              
        <Grid item sx={12} >
        <Typography  sx={{fontSize:'30px', fontFamily:"'Lato', sans-serif", color:'#101F30', marginBottom:'20px'}}>
        
        Pros and cons of personal loans        
        </Typography>           
        </Grid>


              
        <Grid item sx={12}>
        <Typography  sx={{fontSize:'17px', fontFamily:"'Lato', sans-serif", color:'#454545', marginBottom:'20px'}}>
        
        While a personal loan can be beneficial, it may not suit every consumer's financial needs perfectly.     
        </Typography>           
        </Grid>

           
        </Grid>
        </Box>

        <Box  sx={{ display: { xs: 'none', sm: 'none', md: 'block'} }}>
        <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={0} >
        <Grid item xs={2} >
          <Typography className='interest-head' sx={{bgcolor:'#101F30', color:'#101F30', marginBottom:'20px'}}>Loans</Typography>
       
          
        </Grid>
        <Grid item xs={5} >
          <Typography  className='interest-headd' sx={{marginBottom:'20px'}}>Pros</Typography>
        
          
        </Grid>
        <Grid item xs={5} >
          <Typography  className='interest-headd' sx={{marginBottom:'20px'}}> Cons</Typography>
        
          
        </Grid>
        </Grid>
        </Box>



        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid item xs={2} sx={{fontSize:'17px', fontWeight:'bold', color:'#000000', fontFamily:"'Lato', sans-serif", padding:'11px'}}>APRs</Grid>
        <Grid item xs={5} >

         <Typography >
         <CheckIcon  />
         Comparison shopping for the lender with the lowest APR can help you save money.
         </Typography >
         <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         Typically, the interest rates are fixed, which simplifies budgeting.
         </Typography>
         </Grid>
         
        <Grid item xs={5}  >
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>

        Meeting the criteria for lower APRs necessitates a robust credit profile, but there's always the option to enhance your credit score and reapply in the future.
        </Typography>
        </Grid>
        </Grid>
        </Box>



         
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid item xs={2} sx={{fontSize:'17px', fontWeight:'bold', color:'#000000', fontFamily:"'Lato', sans-serif", padding:'11px'}}>Repayment</Grid>
        <Grid item xs={5} >
         <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         Personal loans come with a fixed payment schedule, providing borrowers with a clear understanding of the duration needed to repay their debt.         </Typography >
         <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         Personal loans are generally unsecured, which means you don’t have to supply collateral.
         </Typography>
         </Grid>
         
        <Grid item xs={5}  >
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>
        Missing one personal loan payment could result in a defaulted debt, causing harm to your credit file and future creditworthiness.

        </Typography>
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>
        While your personal property isn’t at risk with unsecured loans, you can still be sued by a debt collector if you fall behind on payments.

        </Typography>
        </Grid>
        </Grid>
        </Box>




        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid item xs={2} sx={{fontSize:'17px', fontWeight:'bold', color:'#000000', fontFamily:"'Lato', sans-serif", padding:'11px'}}>Amounts, fees</Grid>
        <Grid item xs={5} >
         <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         Many lenders allow you to borrow a wide variety of amounts for a wide variety of purposes.
         </Typography >
         <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         There are plenty of no-fee lenders to choose from.
         </Typography>
         </Grid>
         
        <Grid item xs={5}  >
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>
        Some lenders charge an origination fee that can be as high as 12% of the loan amount.

        </Typography>
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>
        Less scrupulous lenders hide fees or offer scant repayment protections.


        </Typography>
        </Grid>
        </Grid>
        </Box>
        </Box>


        {/* ----------------------------------------------- */}
        <Box sx={{ display: { lg:'none'} }}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={3} md={3} sm={3}>
        <Typography className='interest-head' sx={{bgcolor:'#101F30', color:'#101F30', marginBottom:'20px'}}><br/></Typography>
        </Grid>
        <Grid item xs={9} md={9} sm={9}>
        <Grid item xs={9} sx={{fontSize:'17px', fontWeight:'bold', color:'#000000', fontFamily:"'Lato', sans-serif", padding:'11px'}}>APRs</Grid>
        
        </Grid>
        </Grid>
        

        <Grid container spacing={2} sx={{marginTop:'-34px'}}>
        <Grid item  xs={3} md={3} sm={3}>
        <Typography  className='interest-headd' sx={{marginBottom:'20px'}}>Pros<br/><br/><br/><br/><br/><br/><br/><br/></Typography>
        </Grid>
        <Grid item xs={9} md={9} sm={9}>
        <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         You can save money by comparison shopping for the lender that offers the lowest possible APR.
         </Typography >
         <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         Generally, the interest rates are fixed, making it easier to budget.
         </Typography>
        
        </Grid>
        </Grid>

        <Grid container spacing={2} sx={{marginTop:'-34px'}}>
        <Grid item xs={3} md={3} sm={3}>
        <Typography  className='interest-headd' sx={{marginBottom:'20px'}}>Cons<br/><br/><br/><br/></Typography>
        </Grid>
        <Grid item xs={9}  >
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>

        Qualifying for lower APRs requires a strong credit profile, though you could always improve your credit score and reapply at a later date.

        </Typography>
        </Grid>
        
        </Grid>

        </Box>

{/* /////////////////////////////////////////////////////////////////////// */}
<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={3} md={3} sm={3}>
        <Typography className='interest-head' sx={{bgcolor:'#101F30', color:'#101F30', marginBottom:'20px'}}><br/></Typography>
        </Grid>
        <Grid item  xs={9} md={9} sm={9}>
        <Grid item xs={9} sx={{fontSize:'17px', fontWeight:'bold', color:'#000000', fontFamily:"'Lato', sans-serif", padding:'11px'}}>Repayment</Grid>
        
        </Grid>
        </Grid>
        

        <Grid container spacing={2} sx={{marginTop:'-34px'}}>
        <Grid item xs={3} md={3} sm={3}>
        <Typography  className='interest-headd' sx={{marginBottom:'20px'}}>Pros<br/><br/><br/><br/><br/><br/></Typography>
        </Grid>
        <Grid item  xs={9} md={9} sm={9}>
        <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         Personal loans have a definite payment schedule, which means borrowers know exactly how long it’ll take to pay off what they owe.
         </Typography >
        
        
        </Grid>
        </Grid>

        <Grid container spacing={2} sx={{marginTop:'-34px'}}>
        <Grid item xs={3} md={3} sm={3}>
        <Typography  className='interest-headd' sx={{marginBottom:'20px'}}>Cons<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></Typography>
        </Grid>
        <Grid item xs={9}  >
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>

        Missing one personal loan payment could result in a defaulted debt, causing harm to your credit file and future creditworthiness.

        </Typography>
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>

        While your personal property isn’t at risk with unsecured loans, you can still be sued by a debt collector if you fall behind on payments.

        </Typography>
        </Grid>
        
        </Grid>

        </Box>


        {/* //////////////////////////////////////////////////////////////////////////////////// */}

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={3} md={3} sm={3}>
        <Typography className='interest-head' sx={{bgcolor:'#101F30', color:'#101F30', marginBottom:'20px'}}><br/></Typography>
        </Grid>
        <Grid item  xs={9} md={9} sm={9}>
        <Grid item  xs={9} md={9} sm={9} sx={{fontSize:'17px', fontWeight:'bold', color:'#000000', fontFamily:"'Lato', sans-serif", padding:'11px'}}>Amounts, fees</Grid>
        
        </Grid>
        </Grid>
        

        <Grid container spacing={2} sx={{marginTop:'-34px'}}>
        <Grid item xs={3} md={3} sm={3}>
        <Typography  className='interest-headd' sx={{marginBottom:'20px'}}>Pros<br/><br/><br/><br/><br/><br/></Typography>
        </Grid>
        <Grid item  xs={9} md={9} sm={9}>
        <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         Many lenders allow you to borrow a wide variety of amounts for a wide variety of purposes.
         </Typography >
         <Typography className='pros-data'>
         <CheckIcon className='check-data' />
         There are plenty of no-fee lenders to choose from.
         </Typography>
        </Grid>
        </Grid>

        <Grid container spacing={2} sx={{marginTop:'-34px'}}>
        <Grid item xs={3} md={3} sm={3}>
        <Typography  className='interest-headd' sx={{marginBottom:'20px'}}>Cons<br/><br/><br/><br/><br/><br/><br/></Typography>
        </Grid>
        <Grid item xs={9}  >
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>

        Some lenders charge an origination fee that can be as high as 12% of the loan amount.

        </Typography>
        <Typography className='pros-data'>
        <CloseIcon className='close-data'/>

        Less scrupulous lenders hide fees or offer scant repayment protections.

        </Typography>
        </Grid>
        
        </Grid>

        </Box>
       </Box>




        </Container>
  )
}

export default BenifitsofPL