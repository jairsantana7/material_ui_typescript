import { Avatar, Drawer, useTheme } from "@mui/material"
import { Box } from "@mui/system"

export const MenuLateral: React.FC =({children})=>{
  const theme = useTheme();
  return (
    <>
     <Box marginLeft={theme.spacing(28)}>
        <Drawer variant='permanent'>
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems={"center"} justifyContent="center" ></Box>
            <Avatar  src="https://lh3.googleusercontent.com/ogw/ADea4I5kac7vk-OMJj_iufqv__bAM0kgf0T-NKZdm-Lm2as=s32-c-mo" />
        </Drawer>
    </Box>
    <Box height="100vh" marginLeft={theme.spacing(28)}>
    {children}
    </Box>
    </>
  )
}