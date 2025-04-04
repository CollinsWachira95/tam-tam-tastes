
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Enhanced color palette with more sophisticated tones and depths
				tamtam: {
					orange: {
						DEFAULT: '#FF6F00', // Darker orange as recommended for higher contrast
						50: '#FFF3E0',
						100: '#FFE0B2',
						200: '#FFCC80',
						300: '#FFB74D',
						400: '#FFA726',
						500: '#FF9800',
						600: '#FF6F00', // Base
						700: '#F57C00',
						800: '#EF6C00',
						900: '#E65100',
					},
					brown: { // Added complementary color
						DEFAULT: '#795548',
						50: '#EFEBE9',
						100: '#D7CCC8',
						200: '#BCAAA4',
						300: '#A1887F',
						400: '#8D6E63',
						500: '#795548', // Base
						600: '#6D4C41',
						700: '#5D4037',
						800: '#4E342E',
						900: '#3E2723',
					},
					gold: { // Added complementary color
						DEFAULT: '#FFC107',
						50: '#FFF8E1',
						100: '#FFECB3',
						200: '#FFE082',
						300: '#FFD54F',
						400: '#FFCA28',
						500: '#FFC107', // Base
						600: '#FFB300',
						700: '#FFA000',
						800: '#FF8F00',
						900: '#FF6F00',
					},
					green: {
						DEFAULT: '#27AE60',
						50: '#D4F5E2',
						100: '#A9EBC5',
						200: '#7EE1A8',
						300: '#53D78B',
						400: '#2ACD6E',
						500: '#27AE60', // Base
						600: '#208F4F',
						700: '#19703D',
						800: '#13502C',
						900: '#0C311A',
					},
					black: '#333333', // Darker gray for better readability
					gray: {
						DEFAULT: '#424242', // Darker for body text
						50: '#F5F5F5', // Off-white for backgrounds
						100: '#E0E0E0',
						200: '#C2C2C2',
						300: '#A3A3A3',
						400: '#858585',
						500: '#666666',
						600: '#4A4A4A',
						700: '#333333',
						800: '#1F1F1F',
						900: '#0A0A0A',
					},
					light: '#F5F5F5', // Off-white for backgrounds
					cream: '#FFF8E1', // Warmer cream color
					accent: '#FF6F00', // Darker orange for accent
					muted: '#757575', // Slightly darker muted text
					earth: '#8B4513', // Earthy tone
					clay: '#B7713C', // Clay color for earthy feel
					sand: '#E2C9A1', // Sand color for contrast
					ivory: '#FFFFF0', // Ivory tone
					spice: '#A52A2A', // Spice color for accent
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1rem',
				'2xl': '1.5rem',
			},
			fontFamily: {
				'neutra': ['Neutra Text', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'], // Added serif font for headings
				'opensans': ['Open Sans', 'sans-serif'], // Added sans-serif for body text
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'elegant': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
				'button': '0 4px 6px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.08)', // Enhanced button shadow
				'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
				'card': '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)', // Enhanced card shadow
				'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // This was missing
				'intense': '0 25px 50px -12px rgba(255, 111, 0, 0.18)', // This was missing
				'premium-hover': '0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'overlay': '0 8px 30px rgba(0, 0, 0, 0.12)', // Added for overlays
				'subtle': '0 3px 6px rgba(0, 0, 0, 0.05)', // Subtle shadow for small elements
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.98)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-8px)' 
					},
					'100%': { 
						transform: 'translateY(0)' 
					}
				},
				'pulse-soft': {
					'0%': { 
						transform: 'scale(1)',
						opacity: '1' 
					},
					'50%': { 
						transform: 'scale(1.03)',
						opacity: '0.95' 
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1' 
					}
				},
				'shine': {
					'0%': { 
						'background-position': '200% 0' 
					},
					'100%': { 
						'background-position': '-200% 0' 
					}
				},
				'shimmer': {
					'0%': { 
						'background-position': '-200% 0' 
					},
					'100%': { 
						'background-position': '200% 0' 
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-up': 'slide-up 0.7s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'reveal': 'reveal 0.6s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
				'shine': 'shine 3s linear infinite',
				'shimmer': 'shimmer 2s infinite linear',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'var(--tw-prose-body)',
						lineHeight: '1.8', // Increased line height for readability
						'> *': {
							marginTop: '1.5em', // Increased spacing
							marginBottom: '1.5em',
						},
						p: {
							marginTop: '1.5em',
							marginBottom: '1.5em',
							lineHeight: '1.8',
						},
						h1: {
							fontSize: '3rem', // 48px
							marginTop: '0',
							marginBottom: '0.8em',
							lineHeight: '1.15',
							fontWeight: '700',
						},
						h2: {
							fontSize: '2.25rem', // 36px
							marginTop: '1.75em',
							marginBottom: '0.8em',
							lineHeight: '1.25',
							fontWeight: '700',
						},
						h3: {
							fontSize: '1.75rem', // 28px
							marginTop: '1.5em',
							marginBottom: '0.8em',
							lineHeight: '1.375',
							fontWeight: '600',
						},
					}
				}
			},
			spacing: {
				'section': '60px', // Consistent section spacing
				'component': '30px', // For component spacing
				'card': '24px', // For card padding
				'element': '16px', // Standard padding for smaller elements
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
