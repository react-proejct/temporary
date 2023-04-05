import React, { useContext, useState } from 'react'
import { IconHeaderMenu, IconHeaderAuthor } from '@/assets/images'
import * as S from './HeaderMenu.style'
import HeaderMenuModal from './HeaderMenuModal'
import { UserContext } from '../../../contexts/UserProvider'
import { LoginContext } from '../../../contexts/LoginProvider'

const HeaderMenu = () => {
  const [isClicked, setIsClicked] = useState(false)
  const currentUser = useContext(LoginContext)
  const user = useContext(UserContext)
  return (
    <>
      <S.MenuContainer
        onClick={() => {
          setIsClicked(!isClicked)
        }}
      >
        <S.MenuImage src={IconHeaderMenu} width={'16px'} height={'16px'} />
        <S.MenuImage
          src={
            currentUser
              ? user.profileImageURL === ''
                ? IconHeaderAuthor
                : user.profileImageURL
              : IconHeaderAuthor
          }
          width={'30px'}
          height={'30px'}
        />
      </S.MenuContainer>
      <HeaderMenuModal isClicked={isClicked} showModalFunc={setIsClicked} />
    </>
  )
}

export default HeaderMenu
