import { Flex } from '~/@components/atoms/Flex'
import { Space } from '~/@components/atoms/Space'
import { Text } from '~/@components/atoms/Text'
import { Button } from '~/@components/molecules/Button'

export default function Home() {
  return (
    <Flex>
      <Space height={'100px'} />
      BEAWESOME
      <Space height={'100px'} />
      <Flex gap={20}>
        <Button text={'맥주 검색하기'} radius={20} backgroundColor="orange" />
        <Button text={'알콜 맥주 추천'} radius={20} backgroundColor="orange" />
        <Button
          text={'논알콜 맥주 추천'}
          radius={20}
          backgroundColor="orange"
        />
      </Flex>
    </Flex>
  )
}
