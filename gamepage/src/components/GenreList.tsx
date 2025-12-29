import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  Image,
  Spinner,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root unstyled>
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
                variant="plain"
                onClick={() => onSelectGenre(genre)}
              >
                <Link>{genre.name}</Link>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenreList;
