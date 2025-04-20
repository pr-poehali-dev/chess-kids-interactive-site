import React from 'react';

type ChessBoardProps = {
  simplified?: boolean;
  interactive?: boolean;
  position?: string;
};

const DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

// Функция для преобразования FEN позиции в массив доски
const fenToBoard = (fen: string): string[][] => {
  const board: string[][] = Array(8).fill(null).map(() => Array(8).fill(''));
  const fenPosition = fen.split(' ')[0]; // Берем только часть позиции
  const rows = fenPosition.split('/');
  
  for (let i = 0; i < 8; i++) {
    let col = 0;
    for (let j = 0; j < rows[i].length; j++) {
      const char = rows[i][j];
      if (!isNaN(parseInt(char))) {
        col += parseInt(char);
      } else {
        board[i][col] = char;
        col++;
      }
    }
  }
  
  return board;
};

// Преобразование символа фигуры в Unicode символ
const pieceToUnicode = (piece: string): string => {
  const pieceMap: Record<string, string> = {
    'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟',
    'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
    '': ''
  };
  return pieceMap[piece] || '';
};

const ChessBoard: React.FC<ChessBoardProps> = ({ 
  simplified = false, 
  interactive = false,
  position = DEFAULT_POSITION
}) => {
  const board = fenToBoard(position);
  
  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        row.map((piece, colIndex) => {
          const isWhite = (rowIndex + colIndex) % 2 === 0;
          return (
            <div 
              key={`${rowIndex}-${colIndex}`} 
              className={`chess-square ${isWhite ? 'chess-white' : 'chess-black'} ${interactive ? 'cursor-pointer hover:opacity-80' : ''}`}
            >
              {pieceToUnicode(piece)}
            </div>
          );
        })
      ))}
    </div>
  );
};

export default ChessBoard;
