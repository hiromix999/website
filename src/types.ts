export interface Participant {
  id: string;
  name: string;
  guestCount: number;
  email?: string;
  bringingGame?: string;
  comment?: string;
  registeredAt: string;
  ticketId: string;
}

export interface BoardGame {
  id: string;
  name: string;
  jpName: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  playTime: number; // in minutes
  difficulty: 'やさしい' | 'ふつう' | 'じっくり';
  imageUrl: string;
  votes: number;
  tags: string[];
}

export interface GameRequest {
  id: string;
  gameName: string;
  requesterName: string;
  comment?: string;
  votes: number;
  createdAt: string;
}
