import type { ArtistProfile } from "@/types/artist";
import { artistProfile as artistProfileData } from "@/source";

export const artistProfiles: ArtistProfile[] = artistProfileData.getPages();
