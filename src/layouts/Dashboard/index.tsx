import {
	Button,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	chakra,
} from "@chakra-ui/react";
import {
	Flex,
	Box,
	Tabs,
	TabList,
	TabIndicator,
	TabPanels,
	TabPanel,
	Tab,
} from "@chakra-ui/react";
import { LinkIcon, PlusSquareIcon, SearchIcon } from "@chakra-ui/icons";

const Divider = () => {
	return <chakra.span w="1px" h="22px" bg="gray.400"></chakra.span>;
};

const DashboardLayout = () => {
	return (
		<Flex wrap="nowrap">
			{/* todo: create sidebar */}
			<Box flex="0 0 340px" borderEnd="1px" ps="xl" pe="md" py="lg" h="100dvh">
				Sidebar
			</Box>
			<Box flex="1 0" ps="md" pe="xl" py="lg">
				<Tabs position="relative" variant="unstyled" isLazy>
					<TabList
						borderBottom="1px"
						borderColor="gray.400"
						pb="xs"
						gap="sm"
						alignItems="center"
					>
						<Heading as="h3" fontSize="heading-xs">
							پروژه اول
						</Heading>
						<Divider />
						<Tab
							_focus={{ color: "cyan-primary" }}
							_hover={{ color: "cyan-primary" }}
							fontSize="body-md"
						>
							نمایش لیستی
						</Tab>
						<Divider />
						<Tab
							_focus={{ color: "cyan-primary" }}
							_hover={{ color: "cyan-primary" }}
							fontSize="body-md"
						>
							نمایش ستونی
						</Tab>
						<Divider />
						<Tab
							_focus={{ color: "cyan-primary" }}
							_hover={{ color: "cyan-primary" }}
							fontSize="body-md"
						>
							تقویم
						</Tab>
						<Divider />
						<Button variant="ghost" leftIcon={<LinkIcon />} ms="auto">
							اشتراک گذاری
						</Button>
					</TabList>
					<TabIndicator
						height="2.5px"
						bg="cyan-primary"
						borderRadius="1px"
						transform="translate(0, -2px)"
					/>
					{/* todo: create filters option */}
					<Flex
						borderBottom="1px"
						borderColor="gray.400"
						py="xs"
						gap="xl"
						alignItems="center"
					>
						<InputGroup w="200px">
							<InputLeftElement pointerEvents="none">
								<SearchIcon />
							</InputLeftElement>
							<Input
								type="search"
								border="none"
								outline="none"
								_focus={{ border: "none", boxShadow: "none" }}
								placeholder="جستجو بین تسک‌ها"
							/>
						</InputGroup>
						<Divider />
					</Flex>
					{/* todo: create tap panels */}
					<TabPanels>
						<TabPanel>
							<p>one!</p>
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
						<TabPanel>
							<p>three!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
			{/* todo: change icon */}
			<Button
				colorScheme="teal"
				leftIcon={<PlusSquareIcon />}
				pos="fixed"
				bottom="30px"
				left="40px"
			>
				تسک جدید
			</Button>
		</Flex>
	);
};

export default DashboardLayout;
