import { useNavigate, useParams } from "react-router-dom"
import { Description, DetailContainer, IconWrap, ImageWrap, Img, ImgOverlay, ImgSelected, ModalContainer, ModalContent, SelectImage, SelectedImage } from "./DetailStyle"
import { useCallback, useEffect, useState } from "react"
import { Image, Pokemon, PokemonAbility, PokemonStats, PokemonType, Stats } from "../Products/types"
import CustomLoaderAnimation from "../../components/CustomLoaderAnimation"
import { getPokemon } from "../../api/pokemon"
import { FaEye, FaTimes } from "react-icons/fa"

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>({} as Pokemon)
  const [selectedImage, setSelectedImage] = useState('')
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  
  const handleModal = () => setModal(prev => !prev)
  const getPokemonData = useCallback(async () => {
    try {
      const { status, data } = await getPokemon(id!)
      if (status === 200) {
        let newData = {} as Pokemon
        for (const key in data) {
          if (key === 'id' || key === 'name' || key === 'height' || key === 'weight') {
            newData = { ...newData, [key]: data[key] }
          }
          if (key === 'types') {
            const types: string[] = data[key].map((el: PokemonType) => el.type.name)
            newData = { ...newData, types }
          }
          if (key === 'stats') {
            const stats: Stats[] = data[key].map((el: PokemonStats) => {
              return {
                name_stat: el.stat.name,
                base_stat: el.base_stat
              }
            })
            newData = { ...newData, stats }
          }
          if (key === 'abilities') {
            const abilities: string[] = data[key].map((el: PokemonAbility) => el.ability.name)
            newData = { ...newData, abilities }
          }
          if (key === 'sprites') {
            let images: Image[] = []
            const otherKey = data[key].other
            for (const sub_key in otherKey) {
              if (sub_key === 'dream_world') {
                images = [ ...images, { key: 'main', url: otherKey[sub_key].front_default } ]
              }
              if (sub_key === 'home') {
                images = [ ...images, { key: 'others', url: otherKey[sub_key].front_default }, { key: 'others', url: otherKey[sub_key].front_shiny } ]
              }
              if (sub_key === 'official-artwork') {
                images = [ ...images, { key: 'others', url: otherKey[sub_key].front_default }, { key: 'others', url: otherKey[sub_key].front_shiny } ]
              }
            }
            newData = { ...newData, images }
          }
        }
        setSelectedPokemon(newData)
        setSelectedImage(newData.images[0].url)
        setLoading(false)
      } else {
        alert('An error occured')
      }
    } catch (err) {
      navigate('/')
    }
  }, [id])

  useEffect(() => {
    getPokemonData()
  }, [getPokemonData])


  console.log({selectedPokemon})
  if (loading) {
    return <CustomLoaderAnimation />
  }
  return (
    <>
      <DetailContainer>
        <ImageWrap>
          <SelectedImage>
            <ImgSelected>
              <img src={selectedImage} alt="Main Image" />
            </ImgSelected>
            <ImgOverlay>
              <div onClick={handleModal}>
                <FaEye />
              </div>
            </ImgOverlay>
          </SelectedImage>
          <SelectImage>
            {
              selectedPokemon.images.map(el => (
                <Img key={el.url} selected={el.url === selectedImage ? true : false} onClick={() => setSelectedImage(el.url)}>
                  <img src={el.url} alt="Images" />
                </Img>
              ))
            }
          </SelectImage>
        </ImageWrap>
        <Description>
          desaaaaaaaaaaqqqq
        </Description>
      </DetailContainer>
      {
        modal && (
          <ModalContainer>
            <ModalContent>
              <IconWrap onClick={handleModal}>
                <FaTimes />
              </IconWrap>
              <img src={selectedImage} alt="Current Image" />
            </ModalContent>
          </ModalContainer>
        )
      }
    </>
  )
}

export default ProductDetailPage