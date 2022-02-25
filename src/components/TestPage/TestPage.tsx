import React from 'react'
import SuperInputText from '../../common/UI/c1-SuperInputText/SuperInputText'
import SuperButton from '../../common/UI/c2-SuperButton/SuperButton'
import SuperCheckbox from '../../common/UI/c3-SuperCheckbox/SuperCheckbox'
import SuperSelect from '../../common/UI/c5-SuperSelect/SuperSelect'
import SuperRadio from '../../common/UI/c6-SuperRadio/SuperRadio'
import SuperRange from '../../common/UI/c7-SuperRange/SuperRange'

export const TestPage = () => {
   return (
      <div>
         <SuperInputText/>
         <SuperButton>Кнопка</SuperButton>
         <SuperCheckbox/>
         <SuperSelect options={['react', 'redux', 'react-redux']} />
         <SuperRadio/>
         <SuperRange/>
      </div>
   )
}
