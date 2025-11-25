import { useMemo } from 'react'
import { Name } from '../pages/npc/name2'

// Aceptamos que 'names' pueda ser el objeto Name O un array de strings
interface Props {
  names: Name | readonly string[]
}

const NameDisplay = ({ names }: Props) => {
  const name = useMemo(() => {
    if (!names) return ''

    // Si es un array (readonly string[])
    if (Array.isArray(names)) {
      return names.filter(Boolean).join(' ')
    }

    // Si es el objeto Name
    const { firstName, familyName, homeName, nickName } = names as Name
    let fullName = firstName || ''
    if (familyName) fullName += ` ${familyName}`
    if (homeName) fullName += ` of ${homeName}`
    if (nickName) fullName += ` "${nickName}"`
    
    return fullName
  }, [names])

  return <span className='font-bold'>{name}</span>
}

export default NameDisplay
