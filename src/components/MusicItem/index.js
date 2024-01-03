import {AiOutlineDelete} from 'react-icons/ai'
import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImage,
  NameGenreContainer,
  Name,
  Genre,
  DurationDeleteContainer,
  Duration,
  DeleteButton,
} from './StyledComponents'

const MusicItem = props => {
  const {musicDetails, onClickDeleteTrack} = props
  const {imageUrl, name, genre, duration, id} = musicDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </TrackInfoContainer>
      <DurationDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          onClick={onDeleteTrack}
          data-testid="delete"
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationDeleteContainer>
    </MusicListItem>
  )
}
export default MusicItem
