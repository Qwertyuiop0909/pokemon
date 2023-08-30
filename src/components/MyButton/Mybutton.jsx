import { Button } from "@mui/material";

export default function MyButton({ card, cb }) {
  return (
    <Button 
        sx={{
            "border-radius": "44px",
            background: "#1986EC",
        }}
        variant="contained" 
        onClick={() => cb(card.url)}>
      {card.name}
    </Button>
  );
}
